/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', (tbl) => {
            tbl.increments('project_id')
            tbl.varchar('project_name', 80).notNullable()
            tbl.string('project_description')
            tbl.boolean('project_completed').defaultTo(0)
        })
        .createTable('resources', (tbl) => {
            tbl.increments('resource_id')
            tbl.varchar('resource_name', 80).notNullable().unique()
            tbl.string('resource_description')
        })
        .createTable('tasks', (tbl) => {
            tbl.increments('task_id')
            tbl.string('task_description').notNullable()
            tbl.varchar('task_notes')
            tbl.boolean('task_completed').defaultTo(0)
            tbl.integer('project_id').references('project_id').inTable('projects')
        })
        .createTable('project_resources', (tbl) => {
            tbl.increments('relative_id')
            tbl.integer('project_id').references('project_id').inTable('projects')
            tbl.integer('resource_id').references('resource_id').inTable('resources')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
