import { pool } from "../database/connection";
import { User } from "../types/user";

export const createUser = async (user: User): Promise<User> => {
  const query = `
    INSERT INTO users (id, name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, email, password
  `;
  const values = [user.id, user.name, user.email, user.password];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const listUsers = async (): Promise<User[]> => {
  const query = `
    SELECT id, name, email, passowrd
    FROM users
    ORDER BY name
  `;

  const result = await pool.query(query);
  return result.rows;
}
