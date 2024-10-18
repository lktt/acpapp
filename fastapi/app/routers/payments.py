from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..database import SessionLocal

router = APIRouter()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.PaymentBase)
def create_payment(payment: schemas.PaymentCreate, db: Session = Depends(get_db)):
    return crud.create_payment(db=db, payment=payment)

@router.get("/", response_model=list[schemas.PaymentBase])
def read_payments(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    payments = crud.get_payments(db=db, skip=skip, limit=limit)
    return payments

@router.get("/{payment_id}", response_model=schemas.PaymentBase)
def read_payment(payment_id: int, db: Session = Depends(get_db)):
    payment = crud.get_payment(db=db, payment_id=payment_id)
    return payment
