export class Project {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
    }

    static fromJson(json) {
        return new Project(json.name, json.description, json.id);
    }
}