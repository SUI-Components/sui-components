# MoleculePhotoUploader

`MoleculePhotoUploader` is a component that lets you drag and drop images on it, or click it to add images. Also, on mobile, let you add photos directly taken with the camera.

Once uploaded into the component, all images will be resized if they are exceeding the max resolution defined by props and/or cropped to fit a given ratio. And JPEG encoded with a little bit of compression.

After they are loaded, the images can be sorted, rotated or deleted from the list.

A set of initial images can be load with an array of URLs passed by props.

Every modification of the list will return a list of Blobs (jpeg encoded!) to be uploaded on a server or whatever you like, and with the Blob, some useful info:

> `url` (String) if the image is one of the initially passed by props will contain an url, if it's undefined, it's a new image.

> `id` (String) you could pass an id to identify each image that was initially passed

> `isNew` (Boolean) if it's a new uploaded image, will be true, if not, will be false and it will have an `url`.

> `isModified` (Boolean): if an image of the initialPhotos, has been rotated, will be `isModified: true`

> `hasErrors` (Boolean) if a initial photo has some kind of error when the component try to download, will have `hasErrors: true`

> `file` (Object) it's the new uploaded file.

> `previewUrl` (String) a preview url to use if you wanna preview the images outside the photoUploader component

[![documentation](https://img.shields.io/badge/read%20the%20doc-black?logo=readthedocs)](https://sui-components.vercel.app/workbench/molecule/photoUploader/)
[![issue](https://img.shields.io/badge/report%20a%20bug-black?logo=openbugbounty&logoColor=red)](https://github.com/SUI-Components/sui-components/issues/new?&projects=4&template=bug-report.yml&assignees=&template=report-a-bug.yml&title=🪲+&labels=bug,component,molecule,photoUploader)
[![npm](https://img.shields.io/npm/dt/%40s-ui/react-molecule-photo-uploader?logo=npm&labelColor=black)](https://www.npmjs.com/package/@s-ui/react-molecule-photo-uploader)

[![Issues open](https://img.shields.io/github/issues-search/SUI-Components/sui-components?query=is%3Aopen%20label%3Acomponent%20label%3AphotoUploader&logo=openbugbounty&logoColor=red&label=issues%20open&color=red)](https://github.com/SUI-Components/sui-components/issues?q=is%3Aopen+label%3Acomponent+label%3AphotoUploader)
[![NPM](https://img.shields.io/npm/l/%40s-ui%2Freact-molecule-photo-uploader)](https://github.com/SUI-Components/sui-components/blob/main/components/molecule/photoUploader/LICENSE.md)

## Installation

```sh
$ npm install @s-ui/react-molecule-photo-uploader --save
```

## Usage

After importing the component `MoleculePhotoUploader` like this

```js
import MoleculePhotoUploader from '@s-ui/react-molecule-photo-uploader'
```

### Basic usage

```js
<MoleculePhotoUploader
  // Icons (required props)
  addMorePhotosIcon={_addMorePhotosIcon}
  deleteIcon={_deleteIcon}
  dragPhotosIcon={_dragPhotosIcon}
  infoIcon={_infoIcon}
  rejectPhotosIcon={_rejectPhotosIcon}
  retryIcon={_retryErrorPhotosIcon}
  rotateIcon={_rotateIcon}
  // Texts (required props)
  addPhotoTextButton={'Seleccionalas de tu dispositivo'}
  addPhotoTextSkeleton={'Añadir más'}
  dragPhotoTextInitialContent={'Arrastra las fotos aquí'}
  dropPhotosHereText={'Suelta las fotos aquí'}
  errorFileExcededMaxSizeText={
    'Las fotografías deben tener un peso máximo de 50 MB'
  }
  errorFormatPhotoUploadedText={
    'Las fotografías deben tener formato JPEG, PNG, GIF, BMP o WEBP'
  }
  errorInitialPhotoDownloadErrorText={'Error al descargar imágenes'}
  notificationErrorFormatPhotoUploaded={
    'Sólo se aceptan los formatos: formato JPEG, PNG, GIF, BMP o WEBP'
  }
  uploadingPhotosText={'Subiendo imágenes...'}
  errorCorruptedPhotoUploadedText={'Archivo %{filepath} ha fallado'}
  // Not required props
  callbackPhotosRejected={rejectedPhotos => console.log(rejectedPhotos)}
  callbackPhotosUploaded={acceptedPhotos => console.log(acceptedPhotos)}
  callbackUploadPhoto={(file, oldUrl) => console.log(file, oldUrl)}
  limitPhotosUploadedText={_limitPhotosUploaded}
  limitPhotosUploadedNotification={_limitPhotosUploadedNotification}
  mainPhotoLabel={'PRINCIPAL'}
  maxPhotos={10}
  rotationDirection={'clockwise'}
  initialPhotos={[
    {url: 'https://images.net/image1.jpg', id: '6c7ee3d8-97db-4142-8520-5136fccfc40b'},
    {url: 'https://images.net/image2.jpg}'
  ]}
/>
```

> **Find full description and more examples in the [demo page](#).**
