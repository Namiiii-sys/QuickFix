import prisma from "@/lib/prisma";

export default async function handler(req,res){
    if(req.method !== "POST")
        return res.status(405).json({message: "method not allowed"});

        const {name,email,password,role}= req.body;


        const existing = await prisma.user.findUnique({where: {email}});
        if(existing) return res.status(401).json({message: "User already exists"});
        
        const user = await prisma.user.create({
            data: {name,email,password,role}
        });

        return res.status(200).json({message: "user created"});
    }
