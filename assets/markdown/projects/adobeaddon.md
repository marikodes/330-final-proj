# Version Control Adobe Express Addon

SUBMITTED TO: WildHacks 2024

WINNER: Major League Hacking (MLH) Most Creative Adobe Express Add-On

### Inspiration
While messing with Adobe Express, we discovered that the version history tab was missing essential features such as saving on command, naming saves, and reverting to previous saves. We wanted to create an add-on to augment the existing features.

### What it does
Our build is a UI prototype that demonstrates the features we wanted to implement. You can name saves, adding them to a list of saves that you can revert to. You can also download saves as well. We also set up an AWS database and s3 means to mimic the cloud database.

### How we built it
We used Adobe's add-on command-line interface (CLI) to create an add-on based off of its "javascript-with-document-sandbox" template, which uses Adobe's Document Sandbox API. VS Code was our IDE of choice. We used AWS database RDS and S3 to set up cloud storage.

### Challenges we ran into
The biggest hurdle was figuring out how to save the page state. Since saving requires storying all the elements on the page, this was critical to figure out. Unfortunately, the Document Sandbox API got the best of us. We had limited document state saving and were unable to save directly into the RDS database.

### Accomplishments that we're proud of
We are proud that we learned how to use Adobe's add-on development tools. We have a generally working UI with the image state of the document that can be deleted.

### What we learned
We learned how to use the add-on CLI, create a local server to test our add-on, and learned the different components and classes of the Document Sandbox API (express-document-sdk).

### What's next for Version Control Add-on for Adobe Express
Once we figure out the methods we need to save the page state, we can go from our UI prototype to functional MVP!

