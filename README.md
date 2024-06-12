# Immersive Healthcare Collaboration Website

This repository contains the development and distribution code for the Immersive Healthcare Collaboration website.

## Content Management

Most maintenance of this site will involve adding small pieces of content with standard format (such as new resource listings or new network members). This is achieved using a standard process of making commits to the remote git repository. If you are not familiar with git and GitHub, [this introduction](https://docs.github.com/en/get-started/quickstart/hello-world) may be useful.

If there is only one developer maintaining the site at any given time, adding small amounts of new content to the site typically consists of three steps: adding the content to your local copy of the site (see ["Running Locally"](#running-locally) below); committing the changes locally to the `master` branch; and pushing those changes to the remote repository.

If multiple developers are simultaneously adding content, or if substantial amounts of new content or changes to the site structure are required, any changes should be committed to a local development branch separate from `master`. A [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) should then be opened and reviewed by site developers before these changes are merged into the `master` branch.

### Adding People to the Network

Data for a new member can be added to the network section of the website by editing the `src/raw_data/people.tsv` file. This file is a standard tab-separated value file which can be opened and edited in any spreadsheet software. To add a new person to the file:

0) Always start by ensuring that you have the most recent version of the website code by running `git pull`. This will overwrite any changes to local files, so make sure you run this command _before_ adding any new content (and don't run it again until you have committed any changes!)
1) Open the file in your preferred spreadsheet software
2) Insert the data for the new person on a new row under each corresponding header, and save the file.
    - If you need to add several new people, their data can be added on new rows all at once. No need to complete all of these steps per individual.
3) Test that the site builds correctly in your local environment (see ["Running Locally"](#running-locally))
    - This will automatically generate and overwrite `src/_data/people.json`, which will show up as a change in your local git repository.
4) Check that the newly added person is visible on the network page of the locally-running site.
5) If the person has been added successfully, commit your changes to the `people.tsv` and `people.json` files to your local master branch.
6) Push your local master branch to the remote.

These instructions assume a single developer is maintaining the site. If multiple developers are maintaining the site, use the `pull` request process outlined previously.

### Adding Partners to the Network
Data for a new partner can be added by editing the `src/raw_data/people.tsv` file. See "Adding new people" above.

### Adding Resources to the Site

Resources are links to information like papers and reports distributed by the collaboration. Resources are stored as `.njk` files in the `src/resources/` directory. To add a new resource, copy one of the existing files and give it a new name appropriate for the resource content being added. You can then open the file to change its content, committing the changes as described [above](#adding-people-to-the-network):

#### `title`
A short title for the resource, which will be displayed on the resources page.

#### `date`
A date for the resource (e.g. publication date) in `yyyy-mm-dd` format

#### `image`
An optional filepath pointing to an image file to be displayed with the resource. This can be replaced with "" (empty opening and closing quotes) if no image is needed. Otherwise it should be a filepath starting with `/assets/images/content/resource_pages/`. Ensure that you copy the image into this directory so that it will be added to the website.

#### `resource_link`: 
An optional URL enclosed in quotation marks, linking to the resource at another location on the web.

e.g.:
`resource_link:"https://osf.io/6khrv/"`

#### `excerpt`
A short description of the resource which will be displayed as text on the resources page. This must be written on a single line.

### Expertise Tags

A list of expertise tags that members can choose from is stored in `src/_data/expertiseTags.json`. They are stored in the "tags" property as string entries in a list. To add a new expertise tag, just add a new string to the list.

### Other Content

In the current version of the website, most other content is hard-coded into the HTML or `.njk` template files. You can edit this content by editing these files in the `src` directory. Note that all content in the `dist` directory is automatically generated and changes will be overwritten when the site is built.

## Running, Building, and Deploying
### Running Locally
To run a local version of the website for development purposes:

1) Install the prerequisite dependencies:
    - [git](https://git-scm.com/)
    - [node (version 20.9.0)](https://nodejs.org/en)
2) [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local computer
3) In a terminal, `cd` into the root directory of the cloned repo
4) Run `npm install` to install the dependencies required to build the website
5) Run `npm start` to serve the website locally (by default, it will be served on [localhost:8080](http://localhost:8080))

### Building and Deploying
The public version of the website will be built and deployed automatically when a commit is made to the `master` branch of this repository. To run the build script locally, follow the instructions in ["Running Locally"](#running-locally), replacing the final step with the command `npm build`.