const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  /// for the dogs
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "users"
  // },
  // handle: {
  //   type: String,
  //   required: true,
  //   max: 40
  // },
  // petName: {
  //   type: [String]
  // },
  // breed: {
  //   type: [String]

  // },
  // location: {
  //   type: String
  // },
  // birthday: {
  //   type: String,
  //   required: true
  // },
  // tagline: {
  //   type: String
  // },
  // bio: {
  //   type: String
  // },
  // instagramUsername: {
  //   type: String
  // }

  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: [String]
  },
  website: {
    type: [String]
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skiills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },

  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);