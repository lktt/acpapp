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

@router.post("/", response_model=schemas.RoomBase)
def create_room(room: schemas.RoomCreate, db: Session = Depends(get_db)):
    return crud.create_room(db=db, room=room)

@router.get("/", response_model=list[schemas.RoomBase])
def read_rooms(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    rooms = crud.get_rooms(db=db, skip=skip, limit=limit)
    return rooms

@router.get("/{room_id}", response_model=schemas.RoomBase)
def read_room(room_id: int, db: Session = Depends(get_db)):
    room = crud.get_room(db=db, room_id=room_id)
    return room
