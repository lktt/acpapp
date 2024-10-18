from sqlalchemy.orm import Session
from . import models, schemas

# CRUD for Guests
def create_guest(db: Session, guest: schemas.GuestBase):
    db_guest = models.Guest(**guest.dict())
    db.add(db_guest)
    db.commit()
    db.refresh(db_guest)
    return db_guest

def get_guest(db: Session, guest_id: int):
    return db.query(models.Guest).filter(models.Guest.guest_id == guest_id).first()

def get_guests(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Guest).offset(skip).limit(limit).all()

# CRUD for Rooms
def create_room(db: Session, room: schemas.RoomBase):
    db_room = models.Room(**room.dict())
    db.add(db_room)
    db.commit()
    db.refresh(db_room)
    return db_room

def get_room(db: Session, room_id: int):
    return db.query(models.Room).filter(models.Room.room_id == room_id).first()

def get_rooms(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Room).offset(skip).limit(limit).all()

def update_room_availability(db: Session, room_id: int, availability: bool):
    db_room = db.query(models.Room).filter(models.Room.room_id == room_id).first()
    if db_room:
        db_room.availability = availability
        db.commit()
        db.refresh(db_room)
    return db_room

# CRUD for Reservations
def create_reservation(db: Session, reservation: schemas.ReservationBase):
    db_reservation = models.Reservation(**reservation.dict())
    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)
    return db_reservation

def get_reservation(db: Session, reservation_id: int):
    return db.query(models.Reservation).filter(models.Reservation.reservation_id == reservation_id).first()

def get_reservations(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Reservation).offset(skip).limit(limit).all()

def update_reservation_status(db: Session, reservation_id: int, status: str):
    db_reservation = db.query(models.Reservation).filter(models.Reservation.reservation_id == reservation_id).first()
    if db_reservation:
        db_reservation.status = status
        db.commit()
        db.refresh(db_reservation)
    return db_reservation

def cancel_reservation(db: Session, reservation_id: int):
    db_reservation = db.query(models.Reservation).filter(models.Reservation.reservation_id == reservation_id).first()
    if db_reservation:
        db.delete(db_reservation)
        db.commit()
    return db_reservation

# CRUD for Payments
def create_payment(db: Session, payment: schemas.PaymentBase):
    db_payment = models.Payment(**payment.dict())
    db.add(db_payment)
    db.commit()
    db.refresh(db_payment)
    return db_payment

def get_payment(db: Session, payment_id: int):
    return db.query(models.Payment).filter(models.Payment.payment_id == payment_id).first()

def get_payments(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Payment).offset(skip).limit(limit).all()
