# Ceramic Filesystem

This is a simple filesystem overlaid on the Ceramic network where each position in the system is a separate stream.

## Generating Stream IDs

A copy of the document definition IDs is checked into the repo, but should you need to generate a new set, the method is:

* `RANDBYTES=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")`
* `SEED=$RANDBYTES yarn bootstrap`