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

@router.post("/", response_model=schemas.ReservationBase)
def create_reservation(reservation: schemas.ReservationCreate, db: Session = Depends(get_db)):
    return crud.create_reservation(db=db, reservation=reservation)

@router.get("/", response_model=list[schemas.ReservationBase])
def read_reservations(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    reservations = crud.get_reservations(db=db, skip=skip, limit=limit)
    return reservations

@router.get("/{reservation_id}", response_model=schemas.ReservationBase)
def read_reservation(reservation_id: int, db: Session = Depends(get_db)):
    reservation = crud.get_reservation(db=db, reservation_id=reservation_id)
    return reservation
