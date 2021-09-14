
module.exports = {

    attributes: {
        email: {
            type: 'string',
            isEmail: true,
            unique: true,
            required: true,
          },
        phone: {
            type: 'string',
            allowNull: true
        },
        street: {
            type: 'string',
            allowNull: true
        },
        city: {
            type: 'string',
            allowNull: true
        },
        zip_code: {
            type: 'number',
            allowNull: true
        }
    }
}