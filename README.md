# Places API Manual

## Add a place

URL - /addPlace \
Request - post \
Body Json Format: \
{\
  "name": "fewa lake",\
  "city": "pokhara",\
  "state": "Kathmandu Kshetra"\
}

## Find a specific place
URL - /findPlace \
Request - post\
Body Json Format:  \
{\
  "name": "fewa lake",\
}

## List places and filter them by name or city
URL - /findPlace\
Request - post\
Body Json Format: \
{\
  "name": "garden of dreams",\
  "city": "pokhara"\
}
