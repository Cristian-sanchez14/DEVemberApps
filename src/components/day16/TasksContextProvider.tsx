import React, { PropsWithChildren, createContext, useContext } from 'react'

const TasksContext = createContext({})

const TasksContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <TasksContext.Provider value={{hello: 'world'}}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider

export const useTasks = () => useContext(TasksContext)