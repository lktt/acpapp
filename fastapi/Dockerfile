# Dockerfile for FastAPI
FROM python:3.10-slim

# Set the working directory
WORKDIR /src

# Copy the requirements file
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the app files
COPY . .

# Expose the port FastAPI will run on
EXPOSE 8000

# CMD to run FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
