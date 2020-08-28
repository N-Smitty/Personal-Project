const breeding = (type, ngMl) => {
  if (type === "Artificial Insemination" || type === "AI") {
    if (ngMl < 2) {
      return "Re-test in 3 days";
    } else if (ngMl >= 2 && ngMl < 3) {
      return "Re-test in 2 days";
    } else if (ngMl >= 3 && ngMl < 3.6) {
      return "Inseminate in 48 hours";
    } else if (ngMl >= 3.6 && ngMl < 4) {
      return "Inseminate in 40 hours";
    } else if (ngMl >= 4 && ngMl < 4.7) {
      return "Inseminate in 32 hours";
    } else if (ngMl >= 4.7 && ngMl < 6.1) {
      return "Inseminate in 24 hours";
    } else if (ngMl >= 6.1 && ngMl < 7) {
      return "Inseminate in 12 hours";
    } else if (ngMl >= 7 && ngMl < 8.1) {
      return "Inseminate in 3 hours";
    } else if (ngMl >= 8.1 && ngMl < 13.1) {
      return "Inseminate NOW!";
    } else if (ngMl >= 13.1 && ngMl < 22) {
      return "This method will no longer be effective. Consider trans-cervical or surgical insemination methods.";
    }
  } else if (type === "Trans-cervical Insemination" || type === "TCI") {
    if (ngMl < 2.7) {
      return "Re-test in 4 days";
    } else if (ngMl >= 2.7 && ngMl < 3.9) {
      return "Re-test in 3 days";
    } else if (ngMl >= 3.9 && ngMl < 6.1) {
      return "Re-test in 2 days";
    } else if (ngMl >= 6.1 && ngMl < 7) {
      return "Inseminate in 36 hours";
    } else if (ngMl >= 7 && ngMl < 9.1) {
      return "Inseminate in 24 hours";
    } else if (ngMl >= 9.1 && ngMl < 10.4) {
      return "Inseminate in 12 hours";
    } else if (ngMl >= 10.4 && ngMl < 11.1) {
      return "Inseminate in 3 hours";
    } else if (ngMl >= 11.1 && ngMl < 17) {
      return "Inseminate NOW!";
    } else if (ngMl >= 17 && ngMl < 22) {
      return "This method will no longer be effective. Consider Surgical Insemination.";
    }
  } else if (type === "Surgical Insemination" || type === "SI") {
    if (ngMl < 3) {
      return "Re-test in 4 days";
    } else if (ngMl >= 3 && ngMl < 4.1) {
      return "Re-test in 3 days";
    } else if (ngMl >= 4.1 && ngMl < 6.1) {
      return "Re-test in 2 days";
    } else if (ngMl >= 6.1 && ngMl < 9) {
      return "Re-test in 1 day";
    } else if (ngMl >= 9 && ngMl < 10.1) {
      return "Re-test in 18 hours";
    } else if (ngMl >= 10.1 && ngMl < 13.1) {
      return "Re-test in 12 hours";
    } else if (ngMl >= 13.1 && ngMl < 15.1) {
      return "Inseminate within 3 hours";
    } else if (ngMl >= 15.1 && ngMl < 20) {
      return "Inseminate NOW!";
    } else if (ngMl >= 20 && ngMl < 21) {
      return "This method will no longer be effective. Try again during the next heat cycle.";
    }
  }
};

module.exports = {
  createDog: async (req, res) => {
    const {name,
      age,
      breed,
      heat,
      inseminationType,
      ng_ml
      // date_taken,
      // time_taken,
    } = req.body;
    console.log(name, age, breed, heat, inseminationType, ng_ml)
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const [dog_id] = await db.dog_profile(
      name,
      age,
      breed,
      heat,
      user_id
    );
    console.log(dog_id);
    await db.breeding_info(
      dog_id.dog_id,
      inseminationType,
      ng_ml
      // date_taken,
      // time_taken
    );
    return res.sendStatus(200);
  },

  getResults: async (req, res) => {
    console.log("body: ", req.body);
    const { dogId, insemination, nanograms } = req.body;
    const db = req.app.get("db");

    await db.breeding_info([
      dogId,
      insemination,
      nanograms,
    ]);

    let results = await db.get_breeding_info([dogId])

    let textResponse = breeding(insemination, nanograms);
    return res.status(200).send({ results, textResponse });
  },
  deleteDog: async (req, res) => {
    const db = req.app.get("db");
    const { dog_Id } = req.params;
    await db.delete_breeding_info(dog_Id);
    db.delete_dog(dog_Id).then((results) => {
      res.status(200).send(results);
    });
  },
  getDogProfile: async (req, res) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    db.get_profile(user_id).then((results) => {
      res.status(200).send(results);
    });
  },
};
