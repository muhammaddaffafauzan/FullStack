import User from "../models/UserModel.js";

export const getUsers = async(req, res) =>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUsersById = async(req, res) =>{
    try{
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try{
        await User.create(req.body);
        res.status(201).json({msg: "user created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try{
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try{
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "user deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
// auth
// export const Register = async(req, res) => {
//     const { name, email, gender, password, confPassword } = req.body;
//     if(password !== confPassword) return res.status(400).json({msg: "password dan confirm password tidak cocok"});
//     const salt = await bcrypt.gensalt();
//     const hashPassword = await bcrypt.hash(password, salt);
//     try {
//        await User.create({
//           name: name,
//           email: email,
//           gender: gender,
//           password: hashPassword
//        }); 
//     } catch (error) {
//         console.log(error)
//     }
// }