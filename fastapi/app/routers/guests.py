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

@router.post("/", response_model=schemas.GuestBase)
def create_guest(guest: schemas.GuestCreate, db: Session = Depends(get_db)):
    return crud.create_guest(db=db, guest=guest)

@router.get("/", response_model=list[schemas.GuestBase])
def read_guests(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    guests = crud.get_guests(db=db, skip=skip, limit=limit)
    return guests

@router.get("/{guest_id}", response_model=schemas.GuestBase)
def read_guest(guest_id: int, db: Session = Depends(get_db)):
    guest = crud.get_guest(db=db, guest_id=guest_id)
    return guest
