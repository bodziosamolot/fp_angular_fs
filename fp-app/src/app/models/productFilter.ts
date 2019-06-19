export class ProductFilter{
    nameAndDescriptionFilter: string;
    categoryName: string;
    
    constructor(nameAndDescriptionFilter: string, categoryName: string)
    {
        this.nameAndDescriptionFilter = nameAndDescriptionFilter;
        this.categoryName = categoryName;
    }
}