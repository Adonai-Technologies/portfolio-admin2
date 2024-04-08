const express = require("express");
const router = express.Router();

const {
	Intro,
	About,
	Project,
	Contact,
	Experience,
	Course,
} = require("../Models/portfolioModel");

const User = require("../Models/userModel");

// get all portfolio data
router.get("/get-portfolio-data", async (req, res) => {
	try {
		const intros = await Intro.find();
		const abouts = await About.find();
		const projects = await Project.find();
		const contacts = await Contact.find();
		const experiences = await Experience.find();
		const courses = await Course.find();

		res.status(200).send({
			intro: intros[0],
			about: abouts[0],
			projects: projects,
			contact: contacts[0],
			experiences: experiences,
			course: courses,
		});
	} catch (error) {
		console.error(error); // Log the error
		res.status(500).send(error);
	}
});

// update intro

router.post("/update-intro", async (req, res) => {
	try {
		const intro = await Intro.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: intro,
			success: true,
			message: "Intro updated successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// update about
router.post("/update-about", async (req, res) => {
	try {
		const about = await About.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: about,
			success: true,
			message: "about updated successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// add experience

router.post("/add-experience", async (req, res) => {
	try {
		const experience = await Experience.create(req.body);
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience added successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// update experience

router.post("/update-experience", async (req, res) => {
	try {
		const experience = await Experience.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience updated successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// delete experience

router.post("/delete-experience", async (req, res) => {
	try {
		const experience = await Experience.findByIdAndDelete(req.body._id);
		res.status(200).send({
			data: experience,
			success: true,
			message: "Experience deleted successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// add project

router.post("/add-project", async (req, res) => {
	try {
		const project = await Project.create(req.body);
		res.status(200).send({
			data: project,
			success: true,
			message: "Project added successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// update-project

router.post("/update-project", async (req, res) => {
	try {
		const project = await Project.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: project,
			success: true,
			message: "Project updated successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// delete-project

router.post("/delete-project", async (req, res) => {
	try {
		const project = await Project.findByIdAndDelete(req.body._id);
		res.status(200).send({
			data: project,
			success: true,
			message: "Project deleted successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

//add course
router.post("/add-course", async (req, res) => {
	try {
		const course = await Course.create(req.body);
		res.status(200).send({
			data: course,
			success: true,
			message: "Course added successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// update-course

router.post("/update-course", async (req, res) => {
	try {
		const course = await Course.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: course,
			success: true,
			message: "Course updated successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// delete-course

router.post("/delete-course", async (req, res) => {
	try {
		const course = await Course.findByIdAndDelete(req.body._id);
		res.status(200).send({
			data: course,
			success: true,
			message: "Course deleted successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

//update Address

router.post("/update-contact", async (req, res) => {
	try {
		const contact = await Contact.findOneAndUpdate(
			{ _id: req.body._id },
			req.body,
			{ new: true }
		);
		res.status(200).send({
			data: contact,
			success: true,
			message: "Contact updated successfully",
		});
	} catch (error) {
		// Handle errors here
		res.status(500).send({ error });
	}
});

// admin login

router.post("/admin-login", async (req, res) => {
	try {
		const user = await User.findOne({
			username: req.body.username,
			password: req.body.password,
		});
		user.password = null;
		if (user) {
			res.status(200).send({
				data: user,
				success: true,
				message: "Login successful",
			});
		} else {
			res.status(200).send({
				data: user,
				success: false,
				message: "Invalid username or password",
			});
		}
	} catch (error) {}
});

module.exports = router;
