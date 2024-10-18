from sqlalchemy import Column, Integer, String, ForeignKey, Date, Numeric, Boolean
from sqlalchemy.orm import relationship
from .database import Base

class Guest(Base):
    __tablename__ = "guests"
    guest_id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String)
    address = Column(String)

class Room(Base):
    __tablename__ = "rooms"
    room_id = Column(Integer, primary_key=True, index=True)
    room_type = Column(String)
    price = Column(Numeric(10, 2))
    availability = Column(Boolean, default=True)

class Reservation(Base):
    __tablename__ = "reservations"
    reservation_id = Column(Integer, primary_key=True, index=True)
    guest_id = Column(Integer, ForeignKey("guests.guest_id"))
    room_id = Column(Integer, ForeignKey("rooms.room_id"))
    check_in_date = Column(Date)
    check_out_date = Column(Date)
    status = Column(String, default="Pending")

class Payment(Base):
    __tablename__ = "payments"
    payment_id = Column(Integer, primary_key=True, index=True)
    reservation_id = Column(Integer, ForeignKey("reservations.reservation_id"))
    amount = Column(Numeric(10, 2))
    payment_method = Column(String)
    payment_date = Column(Date)
