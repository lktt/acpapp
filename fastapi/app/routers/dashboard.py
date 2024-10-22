from fastapi import APIRouter

router = APIRouter()

@router.get("/dashboard")
async def get_dashboard_metrics():
    metrics = {
        "totalRooms": 400,
        "bookedRooms": "amount of booked rooms",
        "availableRooms": "amount of available rooms",
        "checkIns": "amount of checkins for today",
        "checkOuts": "amount of checkouts for today",
    }
    return metrics
