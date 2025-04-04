import { writable } from 'svelte/store';
import type { Team } from '../interfaces/team.interface';
import type { Player } from '$interfaces/player.interface';

export const teams = writable<Team[]>([]);

export const players = writable<Player[]>([]);