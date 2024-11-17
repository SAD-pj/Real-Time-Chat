import sqlite3
conn = sqlite3.connect('realtime_chat_backend/db/user.db')
cursor = conn.cursor()

#cursor.execute("INSERT INTO user (name, nick_name, password, mobile, online_status, avatar, email, session_history, chat_id, user_timestamp, emoji) VALUES"+ 
               #"('admin', 'admin', 'admin', '1234', 1, 'admin',' '")
#cursor.execute("select * from user")
#print(cursor.fetchall())

cursor.execute("INSERT INTO chat (send_id, recipient_id, content, type, status, chat_timestamp, create_at, is_read, avatar) VALUES"+
               "(123, 456, 'hello', 0, 1, '2021-01-01 00:00:00', '2021-01-01 00:00:00', 0, 'admin')")
cursor.execute("select * from chat")
print(cursor.fetchall())
conn.commit()
conn.close()
