"""API and sta."""
import os

import atuyka
import fastapi
import starlette
import starlette.middleware.cors
import starlette.staticfiles

__all__ = ["app"]

app: fastapi.FastAPI = fastapi.FastAPI(
    docs_url="/api/docs",
    redoc_url=None,
    openapi_url="/api/openapi.json",
)
app.include_router(atuyka.api.router, prefix="/api")
app.add_exception_handler(atuyka.errors.AtuykaError, atuyka.api.exception_handler)
app.add_middleware(
    starlette.middleware.cors.CORSMiddleware,
    allow_origins=["*"],
)

if directory := os.environ.get("ATUYMERI_STATIC"):
    static_app = starlette.staticfiles.StaticFiles(directory=directory, html=True)
    app.mount("/", static_app, name="static")

atuyka.load_services()
