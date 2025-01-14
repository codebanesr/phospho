import { OrgMetadata } from "@/models/organizations";
import { ColumnFiltersState, Updater } from "@tanstack/react-table";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Event } from "../models/events";
import { HasEnoughLabelledTasks, Project } from "../models/project";
import { SessionWithEvents } from "../models/sessions";
import { Task, TaskWithEvents } from "../models/tasks";

// The navigation store stores local state, that are based
// on what buttons were clicked or selected
// It's persisted to local storage
interface navigationState {
  selectedOrgId: string | null | undefined;
  setSelectedOrgId: (orgId: string | null) => void;
  project_id: string | null | undefined;
  setproject_id: (projectId: string | null) => void;

  tasksColumnsFilters: ColumnFiltersState;
  setTasksColumnsFilters: (
    tasksColumnsFilters: Updater<ColumnFiltersState>,
  ) => void;
  sessionsColumnsFilters: ColumnFiltersState;
  setSessionsColumnsFilters: (
    sessionsColumnsFilters: Updater<ColumnFiltersState>,
  ) => void;
}

export const navigationStateStore = create(
  persist<navigationState>(
    (set) => ({
      selectedOrgId: undefined,
      setSelectedOrgId: (orgId: string | null) =>
        set((state) => ({ selectedOrgId: orgId })),

      project_id: null,
      setproject_id: (projectId: string | null) =>
        set((state) => ({ project_id: projectId })),

      tasksColumnsFilters: [],
      setTasksColumnsFilters: (updaterOrValue: Updater<ColumnFiltersState>) =>
        set((state) => {
          if (typeof updaterOrValue === "function") {
            const update = updaterOrValue(state.tasksColumnsFilters);
            return {
              tasksColumnsFilters: update,
            };
          }
          return {
            tasksColumnsFilters: updaterOrValue,
          };
        }),
      sessionsColumnsFilters: [],
      setSessionsColumnsFilters: (
        updaterOrValue: Updater<ColumnFiltersState>,
      ) =>
        set((state) => {
          if (typeof updaterOrValue === "function") {
            const update = updaterOrValue(state.sessionsColumnsFilters);
            return {
              sessionsColumnsFilters: update,
            };
          }
          return {
            sessionsColumnsFilters: updaterOrValue,
          };
        }),
    }),
    {
      name: "navigation-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

// The data state store share the data between the different components
// Those data were fetched from the backend
// Not persist when you reload
interface dataState {
  selectedOrgMetadata: OrgMetadata | null;
  setSelectOrgMetadata: (selectOrgMetadata: OrgMetadata) => void;

  projects: Project[] | null;
  setProjects: (projects: Project[]) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;

  hasTasks: boolean | null;
  setHasTasks: (hasTasks: boolean | null) => void;
  hasSessions: boolean | null;
  setHasSessions: (hasSessions: boolean | null) => void;
  hasLabelledTasks: HasEnoughLabelledTasks | null;
  setHasLabelledTasks: (
    hasLabelledTasks: HasEnoughLabelledTasks | null,
  ) => void;

  tasksWithEvents: TaskWithEvents[];
  setTasksWithEvents: (tasks: TaskWithEvents[]) => void;
  sessionsWithEvents: SessionWithEvents[];
  setSessionsWithEvents: (sessions: SessionWithEvents[]) => void;
  events: Event[];
  setEvents: (events: Event[]) => void;

  tasksWithoutHumanLabel: Task[] | null;
  setTasksWithoutHumanLabel: (tasks: Task[]) => void;

  uniqueEventNames: string[];
  setUniqueEventNames: (uniqueEventNames: string[]) => void;
  uniqueEventNamesInData: string[];
  setUniqueEventNamesInData: (uniqueEventNamesInData: string[]) => void;
}

export const dataStateStore = create<dataState>((set) => ({
  selectedOrgMetadata: null,
  setSelectOrgMetadata: (selectOrgMetadata: OrgMetadata) =>
    set((state) => ({ selectedOrgMetadata: selectOrgMetadata })),

  projects: null,
  setProjects: (projects: Project[]) =>
    set((state) => ({ projects: projects })),
  selectedProject: null,
  setSelectedProject: (project: Project | null) =>
    set((state) => ({ selectedProject: project })),

  hasTasks: null,
  setHasTasks: (hasTasks: boolean | null) =>
    set((state) => ({ hasTasks: hasTasks })),
  hasSessions: null,
  setHasSessions: (hasSessions: boolean | null) =>
    set((state) => ({ hasSessions: hasSessions })),
  hasLabelledTasks: null,
  setHasLabelledTasks: (hasLabelledTasks: HasEnoughLabelledTasks | null) =>
    set((state) => ({ hasLabelledTasks: hasLabelledTasks })),

  tasksWithEvents: [],
  setTasksWithEvents: (tasks: TaskWithEvents[]) =>
    set((state) => ({ tasksWithEvents: tasks })),
  sessionsWithEvents: [],
  setSessionsWithEvents: (sessions: SessionWithEvents[]) =>
    set((state) => ({ sessionsWithEvents: sessions })),
  events: [],
  setEvents: (events: Event[]) => set((state) => ({ events: events })),

  tasksWithoutHumanLabel: null,
  setTasksWithoutHumanLabel: (tasks: Task[]) =>
    set((state) => ({ tasksWithoutHumanLabel: tasks })),

  uniqueEventNames: [],
  setUniqueEventNames: (uniqueEventNames: string[]) =>
    set((state) => ({ uniqueEventNames: uniqueEventNames })),
  uniqueEventNamesInData: [],
  setUniqueEventNamesInData: (uniqueEventNamesInData: string[]) =>
    set((state) => ({ uniqueEventNamesInData: uniqueEventNamesInData })),
}));
