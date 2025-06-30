import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export default async function handler(req,res){
    if(req.method !== "POST")
        return res.status(405).json({message: "method not allowed"});

        const {email,password}= req.body;
        const user = await prisma.user.findUnique({where: {email}});

        if(!user || user.password !== password){
            return res.status(401).json({message: "Invalid credentials"});
        }

        const token = 
        jwt.sign(
            { id: user.id,
              email: user.email,
              role: user.role},
              process.env.JWT_SECRET,
              {expiresIn: "30d"}
        );

        return res.status(200).json({token});
    }
