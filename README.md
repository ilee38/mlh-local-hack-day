# Major League Hacking's Local Hack Day @ [UTSA](https://www.utsa.edu)

A 12-hour hackaton across several countries and schools. More info on [Local hack day's website](https://localhackday.mlh.io/)

## Project Description

Pet Finder: a web app for pet face detection.

### Motivation:
Surveillance cameras are now able to use AI software to identify individuals on public places.
The motivation behind this project is to use this technology to find missing pets.

### Details:
The [Google Cloud vision API](https://cloud.google.com/vision/docs/) was used to quickly provide a description of the contents of an image. No need to train my own neural network!!! :sweat_smile:
On the back-end, NodeJS was used to create the simple web app. Bootstrap was also used for some quick formatting.

An image of a pet is sent through a request to the API, and a response is received containing a description (e.g. dog) and a score value from 0 to 1, which indicates the level of confidence (1 = 100% confident) for each description.

#### End of day status:
The app is running with 3 sample images. It sends the request to the vision API and displays the descriptions and confidence levels as a list for each image.


## Future Work

- Need to add an HTML form or other means to allow the user to upload their own images.
- In order to recognize a particular pet, a database of pets would be necessary. I.e. the problem is not just recognize an animal in a picture, but to recognize a specific animal/pet.
- Would be nice to also make it a mobile app.

