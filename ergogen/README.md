# Ergogen configuration files

This folder contains the input and ouputs of ergogen to generate the shockboard layout.

## Note on compatibility

Ergogen v4.0.0 introduced breaking changes to configuration, some older config files can only be used with ergogen v3.1.2 or similar. A note is added to the top of the `shockboard*.yaml` files to denote the version which was used to generate the output with it.

## Generating layouts

Output folders are generated with [ergogen](ergogen.xyz), e.g.

```shell
cd shockboard-vX_Y_Z
ergogen shockboard-vX_Y_Z.yaml
```

`mx_cutouts.dxf` files contain the plate cutouts necessary for Cherry MX compatible switches.
