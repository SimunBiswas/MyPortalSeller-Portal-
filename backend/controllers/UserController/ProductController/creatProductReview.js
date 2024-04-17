import {Product} from '../../../Database/Models/CommonModel/productSchema';

exports.createProductReview = async (req, resp) => {
    const { rating, comment, productId, name } = req.body;

    const review = {
        name,
        user:req.userData._id,
        rating: Number(rating),
        comment,
    };

    try {
        const product = await Product.findById(productId);

        if (product) {
            const isReviewed = product.reviews.find((rev) => rev.user === user);

            if (!isReviewed) {
                product.reviews.push(review);
            } else {
                product.reviews.forEach((rev) => {
                    if (rev.user === user) {
                        rev.rating = rating;
                        
                    }
                });
            }

            product.numOfReviews = product.reviews.length;
            let totalRatings = 0;

            product.reviews.forEach((rev) => {
                totalRatings += rev.rating;
            });

            product.rating = totalRatings / product.reviews.length;

            await product.save();

            resp.status(200).json({
                success: true,
                message: "Review submitted successfully",
            });
        } else {
            resp.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    } catch (error) {
        console.error("Error creating product review:", error);
        resp.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};