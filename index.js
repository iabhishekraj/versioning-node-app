class Versioning {

  constructor() {}

  readVersion() {
    const version = "1.0.0";
    return version.split(".");
  }
  
  updateVersion(major, minor, patch) {
    const version = this.readVersion();
    console.log('version ', version);
  }
  
}

const v = new Versioning();
v.updateVersion();