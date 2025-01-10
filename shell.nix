with import <nixpkgs> { };

mkShell {
  nativeBuildInputs = with buildPackages; [ nodejs_18 nodePackages.pnpm rustc rustfmt cargo clippy ];
}
