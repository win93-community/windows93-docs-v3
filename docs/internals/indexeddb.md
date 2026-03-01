# Filesystem information

Windows 93 uses IndexedDB to store files.  
There exist two buckets, each with one object store called `store`. `fileindex` is first initialized as a dump of /files.cbor.  
`fs` is all .desktop files, etc. Each file is given a unique identifier, and is stored as a [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object.