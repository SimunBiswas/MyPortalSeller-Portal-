class ApiFeatures {
    /**
     * Constructor for ApiFeatures class.
     * @param {Object} query - Mongoose query object.
     * @param {Object} queryStr - Query parameters from request.
     */
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    /**
     * Search function to filter products based on keyword.
     * @returns {Object} - Modified instance of ApiFeatures.
     */
    search() {
        const { keyword } = this.queryStr;

        if (keyword) {
            // Apply regex search for name, category, description, and brand
            this.query = this.query.find({
                $or: [
                    { name: { $regex: `.*${keyword}.*`, $options: "i" } },
                    { category: { $regex: `.*${keyword}.*`, $options: "i" } },
                    { description: { $regex: `.*${keyword}.*`, $options: "i" } },
                    { brand: { $regex: `.*${keyword}.*`, $options: "i" } },
                ],
            });
        }

        return this;
    }

    /**
     * Filter function to apply additional filters to the query.
     * @returns {Object} - Modified instance of ApiFeatures.
     */
    filter() {
        const { keyword, page, limit, ...queryCopy } = this.queryStr;

        // Remove non-filter fields from query
        const queryStr = JSON.stringify(queryCopy)
            .replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

        // Apply filter to the query
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    /**
     * Pagination function to implement pagination for results.
     * @param {number} productsPerPage - Number of products per page.
     * @returns {Object} - Modified instance of ApiFeatures.
     */
    pagination(productsPerPage) {
        const currentPage = parseInt(this.queryStr.page, 10) || 1;
        const skip = productsPerPage * (currentPage - 1);

        // Apply pagination to the query
        this.query = this.query.limit(productsPerPage).skip(skip);
        return this;
    }
}

export default ApiFeatures;
