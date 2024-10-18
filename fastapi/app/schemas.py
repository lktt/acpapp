from pydantic import BaseModel
from datetime import date

class GuestBase(BaseModel):
    name: str
    email: str
    phone: str
    address: str

class RoomBase(BaseModel):
    room_type: str
    price: float
    availability: bool

class ReservationBase(BaseModel):
    guest_id: int
    room_id: int
    check_in_date: date
    check_out_date: date
    status: str = "Pending"

class PaymentBase(BaseModel):
    reservation_id: int
    amount: float
    payment_method: str
    payment_date: date
