FROM taller/node

# Build-time configuration.
# -------------------------
# This is most probably going to be override by the Makefile on CI.

ARG APP_NAME=todogram
ARG GROUP_ID=1000
ARG USER_ID=1000


# Configure environment.
# ----------------------

ENV APP_NAME=${APP_NAME}
ENV GROUP_ID=${GROUP_ID}
ENV GROUP_NAME=${APP_NAME} USER_ID=${USER_ID} USER_NAME=${APP_NAME}


# Create group and user.
# ----------------------

RUN groupadd --gid ${GROUP_ID} ${GROUP_NAME}                                                      \
 && echo "%sudo ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers                                          \
 && useradd -u ${USER_ID} -G users,www-data,sudo -g ${GROUP_NAME} -d /${APP_NAME} --shell /bin/bash -m ${APP_NAME} \
 && echo "secret\nsecret" | passwd ${USER_NAME}


# Install Heroku cli.
# -------------------
RUN wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh


# Import files.
# -------------

COPY ./.bashrc /${APP_NAME}/.bashrc
RUN chown ${USER_NAME}:${GROUP_NAME} /${APP_NAME}/.bashrc


# Final setup.
# ------------

USER ${USER_NAME}
