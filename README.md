# pep440conv
Simple stdin/stdout-based utilities for converting to and from PEP-440 semver strings.

## Requirements

- Node.js 14 or newer

## Installation

The pep440conv utility can be installed using `npm`:

```sh
npm -g pep440conv
```

## Usage

Usage is very straightforward. Once the packge is installed `frompep440` and `topep440` become available from the
command line:

```bash
$ # Converting from a regular semver string to to PEP-440.
$ echo '1.0.0-rc.1' | topep440
1.0.0-rc1

$ # Converting from PEP-440 to a regular semver string.
$ echo '1.0.0-rc1' | frompep440
1.0.0-rc.1
```

## License

[MIT](LICENSE) © [lambdacasserole](https://github.com/lambdacasserole).
