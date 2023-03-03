
In this project I was given a set of requirements and designed a database to satisfy them. As a part of this process I also built an API with endpoints to access the data.

I added `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the `package.json` file.

Built the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints.

- [ ] A **project** was what needs to be done and was stored in a `projects` table with the following columns:

  - [ ] `project_id` - primary key
  - [ ] `project_name` - required
  - [ ] `project_description` - optional
  - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

- [ ] A **resource** was anything needed to complete a project and was stored in a `resources` table with the following columns:

  - [ ] `resource_id` - primary key
  - [ ] `resource_name` - required and unique
  - [ ] `resource_description` - optional

- [ ] A **task** was one of the steps needed to complete a project and was stored in a `tasks` table with the following columns:

  - [ ] `task_id` - primary key
  - [ ] `task_description` - required
  - [ ] `task_notes` - optional
  - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
  - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table

- [ ] A **resource assignment** connects a resource and a project, and was stored in a `project_resources` table.

### Required Endpoints

Built an API inside the `api` folder with endpoints for:

- [ ] `[POST] /api/resources`
  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`
  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [ ] `[POST] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [ ] `[GET] /api/projects`
  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [ ] `[POST] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [ ] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`
