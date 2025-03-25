import { writable } from 'svelte/store';
import type { Team } from '../interfaces/team.interface';

export const teams = writable<Team[]>([]);