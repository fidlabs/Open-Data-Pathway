# Open-Data-Pathway

This is a production repo that handles LDN Applications.

Must of the work here is done throug github actions where we listen to different events (like ISSUE_OPEN) and execute actions.

Managing LDN Applications involves allowing intializatin an application through an issue or a pull request. In the first scenario
we parse the new issue opened and create a pull request for it, after that all the management of that application will occur under the pull request.
you can open an application through a pr through the filplus-backend API or the a template we will implement in Github. Otherwise, you can follow the filecoin LDN application standards to open an application on your own.

