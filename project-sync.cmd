@echo off
pushd "%~dp0"
if "%~1"=="" (
  python scripts\project_sync.py status --online
  pause
) else (
  python scripts\project_sync.py %*
)
set project_sync_exit=%errorlevel%
popd
exit /b %project_sync_exit%
