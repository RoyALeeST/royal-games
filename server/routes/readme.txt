By convention routes will have to contain the following format

/{controller}/{method}/{*keywords}

Examples

/api/v1/customers/get/customer
/api/v1/credits/get/all
/api/v1/credits/get/all/:promoterId
/api/v1/promoter/get/all/credits/:promoterId

with this convention it will be easier to debug when searching for an endpoint who needs to be updated.
We will know exactly which controller to look for, into which section (GET/ POST/ PATACH/ DELETE).