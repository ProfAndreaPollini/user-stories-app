function generate_id() {
    return 1
}

export class UserStory {
    constructor(name, description, status, kind, projectId) {
        this.id = generate_id()
        this.name = name;
        this.description = description;
        this.status = status;
        this.kind = kind;
        this.projectId = projectId;
        this.tasks = []
    }


}