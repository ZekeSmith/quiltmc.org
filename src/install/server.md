---
layout: install
title: titles.install.server
permalink: /install/server/
has_downloads: true
---

<div class="heading-with-button">
   <h1>Server</h1>
</div>

Before getting started, you'll need to make sure you download a copy of the Quilt installer. You'll also need to make
sure you've [installed Java](https://java.com/en/download/).

<div class="field is-horizontal">
    <div class="field-label is-normal mt-1">
        <span class="title is-6" id="launcher-version">Download</span>
    </div>
    <div class="field-body">
        <div class="field">
            <div class="control">
               <a id="universal-download" href="https://maven.quiltmc.org/repository/release/org/quiltmc/quilt-installer/latest/quilt-installer-latest.jar" class="button is-primary mt-1">Universal (.jar)</a>
            </div>
        </div>
    </div>
</div>

## GUI Installation

Once you have a copy of the Quilt installer downloaded, follow these steps:

1. Find the Quilt installer you downloaded and run it
2. Ensure that you have the **Server** tab selected
3. Select the version of Minecraft you wish to install Quilt for
4. Select the version of the Quilt loader you'd like to use
5. Select the location you'd like to install the server to
6. Check the **Download server jar** box
7. Click the **Install** button

This will download a copy of the Minecraft server to the location you specified, and install Quilt to it, providing a 
launcher JAR to start the server with. Once that's done, create a `.bat` (for Windows) or `.sh` (for Mac/Linux) file,
with the following contents:

```sh
java -jar quilt-server-launch.jar nogui
```

That's all there is to it - use the corresponding `.bat` or `.sh` file to start the server for the first time, then 
stop it (with `/stop` or `ctrl+c`) and set it up as you normally would.

## CLI Installation

Once you have a copy of the Quilt installer downloaded, you'll need to run it from your terminal, replacing 
`INSTALLER_VERSION` and `MINECRAFT_VERSION` as needed:

```bash
java -jar quilt-installer-INSTALLER_VERSION.jar \
  install server MINECRAFT_VERSION \
  --download-server
```

This will download a copy of the Minecraft server to `server/` and install Quilt to it, providing a launcher JAR to
start the server with. Once that's done, create a `.bat` (for Windows) or `.sh` (for Mac/Linux) file, with the 
following contents:

```sh
java -jar quilt-server-launch.jar nogui
```

That's all there is to it - use the corresponding `.bat` or `.sh` file to start the server for the first time, then
stop it (with `/stop` or `ctrl+c`) and set it up as you normally would.

# Installing Mods

Installing mods is a fairly simple process:

1. Download the mods you'd like to install
2. Create a folder named `mods` alongside your server files, if one doesn't already exist
3. Copy your mod files into the `mods/` folder
4. Ensure you have also added the **Quilt Standard Libraries**, which you can find
   [on Modrinth](https://modrinth.com/mod/qsl)

Launch your installation, and the mods should be available immediately. If you run into any issues, please take a look
at the [troubleshooting page](/usage/troubleshooting), or [join us on Discord](https://discord.quiltmc.org) to ask for
support!
