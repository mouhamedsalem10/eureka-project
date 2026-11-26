import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
import py_eureka_client.eureka_client as eureka_client

PORT = int(os.getenv("PORT", 8084))


@asynccontextmanager
async def lifespan(app: FastAPI):
    await eureka_client.init_async(
        eureka_server="http://localhost:8761/eureka",
        app_name="notification",
        instance_host="127.0.0.1",
        instance_port=PORT,
    )
    yield
    await eureka_client.stop_async()


app = FastAPI(lifespan=lifespan)


@app.get("/api/notifications/hello")
def hello():
    return {"message": f"Hello from Notification on port {PORT}"}