# Apache and PHP with OCI8 + Oracle Instant Client in Mac OSX

I’m running a 13 inch MacBook Pro v.10.13.6 ( High Sierra ).

After spending some time in Apache trying to configure OCI8, I quickly concluded that it is a pain to configure. This post will go through how to get any OCI and Instant Client up and running on your Mac OSX.

## Prerequisites

* You have PHP installed on your Mac ( v.7.x is the latest, but anything is fine)

* You have knowledge of what a symlink is

* You can read

## Getting started

### PHP

Before actually doing anything, I’m making sure that I have PHP installed at the correct path and that the php.init file is located somewhere I know.

**$ php — version**

![I’m running PHP version 7.2.6](https://cdn-images-1.medium.com/max/2264/1*-VmSi3xw76x5JV0gU3XEPg.png)


**$ which php**

![php is under /usr/local/bin](https://cdn-images-1.medium.com/max/2292/1*9X46VCTDGtYMnIIEqNBnyA.png)


**$ php — ini**

![Our configuration file for php is under usr/local/etc/php/7.2](https://cdn-images-1.medium.com/max/2424/1*LInDicJKTJPH3kJ9efruGQ.png)

*Our configuration file for php is under usr/local/etc/php/7.2*

The reason why we are looking for this file is because this is where our OCI8 module will get included in order for PHP and Apache to detect the dependency and to use it. If you don’t have the file located, you can create one by doing touch /etc/php/is/located/here/php.ini . If you are wondering what your PHP path is, you can do which php. The easiest way to install PHP is via [Homebrew](https://brew.sh) if you don’t already have that installed.

### Instant Client

Instant Client is what OCI8 depends on in order to run successfully. We will have to install Instant Client from the [Official Oracle site](https://www.oracle.com/technetwork/topics/intel-macsoft-096467.html), and you might need to create a user.

## Install The Following:

* [instantclient-basic-macos.x64–12.2.0.1.0–2.zip](https://www.oracle.com/technetwork/topics/intel-macsoft-096467.html) (This depends on which release is the latest, but this is mine)

* [instantclient-sdk-macos.x64–12.2.0.1.0–2.zip](https://www.oracle.com/technetwork/topics/intel-macsoft-096467.html) (This depends on which release is the latest, but this is mine)

* Additionally you can install sqlplus to verify that your symlinks are correct after we’ve installed these dependencies.

After these have been Downloaded, navigate to where you have downloaded them. My downloads are located at/Users/ev1stensberg/Downloads/instantclient-x-macos.x64.

Now we are ready to link the dependencies to OSX to be able to use their commands to make them function as regular Command Line Applications. Before doing that, we need to unpack the zip files at a given location.

From experience, to avoid denied permissions from the system and forgetting the location of where the folder is located, I tend to extract these files under /opt/somewhere .

## We begin by creating a folder for our directory for zip extraction:

$ mkdir -p /opt/oracle

## Secondly we move the downloaded folders to the *oracle* folder

$ mv /Users/ev1stensberg/Downloads/instantclient-basic-macos.x64-12.2.0.1.0-2.zip /opt/oracle

$ mv /Users/ev1stensberg/Downloads/instantclient-sdk-macos.x64-12.2.0.1.0-2.zip /opt/oracle

## Third is to unzip the files we have moved to the oracle folder

$ unzip /opt/oracle/instantclient-basic-macos.x64-12.2.0.1.0-2.zip

$ unzip /opt/oracle/instantclient-sdk-macos.x64-12.2.0.1.0-2.zip

*Optional: **Now as we have unzipped the files to the oracle folder, you can safely remove the zip files from the folder by doing***$ rm -rf /opt/oracle/*.zip ***.***

***If you failed at the third step, don’t worry. You can move and unzip the files via ***finder***.***

## Integrating Instant Client To OSX

Now we are ready to actually use the programs we have installed. In order to do so, we will have to create symlinks to /usr/bin in order for the mac to treat the files as executables, such as the cd or ls command.

**You** can do so by doing:

    **$ sudo ln -s /opt/oracle/sdk/include/*.h /usr/local/include/**
    **$ sudo ln -s /opt/oracle/*.dylib /usr/local/lib/**
    **$ sudo ln -s /opt/oracle/*.dylib.11.1 /usr/local/lib/**
    **$ sudo ln -s /opt/oracle/libclntsh.dylib.11.1 /usr/local/lib/libclntsh.dylib**

You can’t really verify the command you are doing if you aren’t symlinking *sqlplus* as well. You can also [look at this guide](https://gist.github.com/krisanalfa/09b765bb95012cd36fbd#preparation), to try another approach. In this example we are creating a soft symlink to our mac’s /usr/local folder, which will make the mac pick up the library as a global executeable.

Next up is to install OCI8, which is a hard nut to crack. I’m going to show you the hard way to link OCI8 because the [pecl](https://gist.github.com/krisanalfa/09b765bb95012cd36fbd#install-extension-with-pecl) way of doing it is quite buggy.

## Installing and linking OCI8

When trying to install oci8, it might be productive to check if the extention is loaded. To check if oci8 is enabled, you can add the line *dd(extension_loaded(‘oci8’)); *to your entry php file (mine is* index.php*)

You will need to install OCI8 from source as the package manager sometimes is hard to reason about. First, find your [oci8 download link](https://pecl.php.net/package/oci8), and navigate to the downloaded folder.

This part is tricky, because Pecl, the PHP package manager usually extracts the package for us and runs the installation with symlinks. First, we start by extracting the tar (zipped) file into a destination:

    $ tar -zxf oci8-x.x.x.tgz
    $ cd oci8-x.x.x

After doing so we need to prepare the package meta-data by using phpize . If you are having troubles, you will need to spend some time debugging why the command might fail, but here are some links:

- [**phpize will not work on Mac OS X Lion**](https://stackoverflow.com/questions/8430977/phpize-wont-work-on-mac-os-x-lion)

- [**Xdebug: Documentation**](https://xdebug.org/docs/install)

- [**Phpize**](http://php.net/manual/en/install.pecl.phpize.php)

If your command works, run: phpize inside the un-extracted directory.

Now is the time to install OCI8, and you can run the following command:

    $ ./configure --with-oci8=shared,instantclient,/path/to/instant/client/lib

    $ make install

If you have troubles with installing this at any point, I advice you to install OCI8 through PECL and then follow along whichever script PECL is running. Reproduce those steps manually and fix the issues the build steps have.

**Congrats! You’re done!**
