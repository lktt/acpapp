from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import crud, models, schemas, database

app = FastAPI()

# Dependency to get the DB session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ------------------- Root Endpoint -------------------
@app.get("/")
def read_root():
    return {"message": "Welcome to the Hotel Reservation API"}

# ------------------- Guests Endpoints -------------------
@app.post("/guests/", response_model=schemas.GuestBase)
def create_guest(guest: schemas.GuestBase, db: Session = Depends(get_db)):
    return crud.create_guest(db=db, guest=guest)

@app.get("/guests/{guest_id}", response_model=schemas.GuestBase)
def get_guest(guest_id: int, db: Session = Depends(get_db)):
    guest = crud.get_guest(db=db, guest_id=guest_id)
    if guest is None:
        raise HTTPException(status_code=404, detail="Guest not found")
    return guest

@app.get("/guests/", response_model=list[schemas.GuestBase])
def get_guests(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_guests(db=db, skip=skip, limit=limit)

# ------------------- Rooms Endpoints -------------------
@app.post("/rooms/", response_model=schemas.RoomBase)
def create_room(room: schemas.RoomBase, db: Session = Depends(get_db)):
    return crud.create_room(db=db, room=room)

@app.get("/rooms/{room_id}", response_model=schemas.RoomBase)
def get_room(room_id: int, db: Session = Depends(get_db)):
    room = crud.get_room(db=db, room_id=room_id)
    if room is None:
        raise HTTPException(status_code=404, detail="Room not found")
    return room

@app.get("/rooms/", response_model=list[schemas.RoomBase])
def get_rooms(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_rooms(db=db, skip=skip, limit=limit)

@app.put("/rooms/{room_id}/availability", response_model=schemas.RoomBase)
def update_room_availability(room_id: int, availability: bool, db: Session = Depends(get_db)):
    room = crud.update_room_availability(db=db, room_id=room_id, availability=availability)
    if room is None:
        raise HTTPException(status_code=404, detail="Room not found")
    return room

# ------------------- Reservations Endpoints -------------------
@app.post("/reservations/", response_model=schemas.ReservationBase)
def create_reservation(reservation: schemas.ReservationBase, db: Session = Depends(get_db)):
    return crud.create_reservation(db=db, reservation=reservation)

@app.get("/reservations/{reservation_id}", response_model=schemas.ReservationBase)
def get_reservation(reservation_id: int, db: Session = Depends(get_db)):
    reservation = crud.get_reservation(db=db, reservation_id=reservation_id)
    if reservation is None:
        raise HTTPException(status_code=404, detail="Reservation not found")
    return reservation

@app.get("/reservations/", response_model=list[schemas.ReservationBase])
def get_reservations(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_reservations(db=db, skip=skip, limit=limit)

@app.put("/reservations/{reservation_id}/status", response_model=schemas.ReservationBase)
def update_reservation_status(reservation_id: int, status: str, db: Session = Depends(get_db)):
    reservation = crud.update_reservation_status(db=db, reservation_id=reservation_id, status=status)
    if reservation is None:
        raise HTTPException(status_code=404, detail="Reservation not found")
    return reservation

@app.delete("/reservations/{reservation_id}", response_model=schemas.ReservationBase)
def cancel_reservation(reservation_id: int, db: Session = Depends(get_db)):
    reservation = crud.cancel_reservation(db=db, reservation_id=reservation_id)
    if reservation is None:
        raise HTTPException(status_code=404, detail="Reservation not found")
    return reservation

# ------------------- Payments Endpoints -------------------
@app.post("/payments/", response_model=schemas.PaymentBase)
def create_payment(payment: schemas.PaymentBase, db: Session = Depends(get_db)):
    return crud.create_payment(db=db, payment=payment)

@app.get("/payments/{payment_id}", response_model=schemas.PaymentBase)
def get_payment(payment_id: int, db: Session = Depends(get_db)):
    payment = crud.get_payment(db=db, payment_id=payment_id)
    if payment is None:
        raise HTTPException(status_code=404, detail="Payment not found")
    return payment

@app.get("/payments/", response_model=list[schemas.PaymentBase])
def get_payments(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_payments(db=db, skip=skip, limit=limit)
