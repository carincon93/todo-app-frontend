import { URL_BACKEND } from 'astro:env/client'

export class TaskService {
    async get() {
        try {
            const response = await fetch(`${URL_BACKEND}/tasks`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            })

            if (!response.ok) throw new Error(`Error fetching data`)

            return await response.json()
        } catch (error) {
            console.error('Error getting tasks:', error)
            return []
        }
    }

    async getTaskById(id) {
        try {
            const response = await fetch(`${URL_BACKEND}/tasks/${id}`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            })

            if (!response.ok) throw new Error(`Error fetching data`)

            return await response.json()
        } catch (error) {
            console.error('Error getting task:', error)
            return []
        }
    }

    async create(data) {
        try {
            const response = await fetch(`${URL_BACKEND}/tasks`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })

            if (!response.ok) throw new Error('Error creating task')

            return response.json()
        } catch (error) {
            console.error(error)
            return null
        }
    }

    async update(id, data) {
        try {
            const response = await fetch(`${URL_BACKEND}/tasks/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })

            if (!response.ok) throw new Error('Error updating task')

            return response.json()
        } catch (error) {
            console.error(error)
            return null
        }
    }

    async delete(id) {
        try {
            const response = await fetch(`${URL_BACKEND}/tasks/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })

            if (!response.ok) throw new Error('Error deleting task')

            return response.json()
        } catch (error) {
            console.error(error)
            return null
        }
    }
}
