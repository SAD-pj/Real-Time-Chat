# do not run this script if the database already exists
import sqlite3
conn = sqlite3.connect('user.db')
cursor = conn.cursor()

sql_statements = """
CREATE TABLE user (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT DEFAULT NULL,
  nick_name TEXT NOT NULL,
  password TEXT DEFAULT NULL,
  mobile TEXT DEFAULT NULL,
  online_status INTEGER DEFAULT NULL,
  avatar TEXT DEFAULT NULL,
  email TEXT NOT NULL,
  session_history TEXT DEFAULT NULL,
  chat_id TEXT DEFAULT NULL,
  user_timestamp TEXT DEFAULT NULL,
  emoji TEXT DEFAULT NULL
);
"""
sql_statement2 = """
CREATE TABLE chat (
  chat_id INTEGER PRIMARY KEY AUTOINCREMENT, 
  send_id INTEGER NOT NULL, 
  recipient_id INTEGER NOT NULL, 
  content TEXT NOT NULL, 
  type INTEGER NOT NULL DEFAULT 0,
  status INTEGER NOT NULL, 
  chat_timestamp TEXT NOT NULL,
  create_at TEXT NOT NULL,
  is_read INTEGER NOT NULL, 
  avatar TEXT DEFAULT NULL
);
"""
sql_statement3 = """
CREATE TABLE groupt (
  group_id INTEGER PRIMARY KEY AUTOINCREMENT,
  group_name TEXT NOT NULL,
  host_id INTEGER NOT NULL,
  member_list TEXT NOT NULL,
  time TEXT NOT NULL,
  history TEXT DEFAULT NULL,
  description TEXT DEFAULT NULL,
  avatar TEXT DEFAULT NULL
);
"""

#cursor.execute(sql_statements)
#cursor.execute(sql_statement2)
cursor.execute(sql_statement3)

conn.commit()
conn.close()
