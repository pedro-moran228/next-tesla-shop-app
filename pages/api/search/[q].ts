import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "@/database";
import { IProduct } from "@/interfaces";
import ProductModel from "@/database/models/Product";

type Data = { message: string } | IProduct[];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    switch (req.method) {
        case "GET":
            return searchProducts(req, res);

        default:
            return res.status(400).json({
                message: "Bad request",
            });
    }
}

const searchProducts = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    let { q = "" } = req.query;

    if (q.length === 0) {
        return res.status(400).json({
            message: "Search query is required",
        });
    }

    q = q.toString().toLowerCase();

    await db.connect();
    const products = await ProductModel.find({
        $text: { $search: q },
    })
        .select("title price sizes images inStock slug -_id ")
        .lean();

    await db.disconnect();

    return res.status(200).json(products);
};
