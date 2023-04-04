import noteSchema from "./schema/schema.js";

export const addNoteData = async (req) => {
  try {
    const { title, description } = req.body;
    await noteSchema.create({ title, description });
    console.log("data Posted on DB");
  } catch (error) {
    console.error(error);
  }
};

export const getNoteData = async () => {
  try {
    const data = await noteSchema.find();
    if (data) {
      return JSON.stringify({
        message: "Documents Found",
        data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const delNoteData = async (req) => {
  try {
    const { id } = req.body;
    const data = await noteSchema.findById(id);

    if (data) {
      data.deleteOne({ id });
      return JSON.stringify({
        message: "Document Deleted ",
      });
    } else {
      return JSON.stringify({
        message: "Document not found  ",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
