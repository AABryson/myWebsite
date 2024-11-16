{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell rec {
    buildInputs = with pkgs; [
      nodejs
      nodePackages.typescript
      nodePackages.typescript-language-server
    ];
  }
